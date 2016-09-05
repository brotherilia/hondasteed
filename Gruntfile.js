"use strict";

module.exports = function(grunt) {

  require("load-grunt-tasks")(grunt);
  require("time-grunt")(grunt);

  grunt.initConfig({

    //*** Очистка ***//
    clean: {
      build: ["build/**/*.html", "build/favicon.ico", "build/css/", "build/img/", "build/js/", "build/fonts/"]
    },

    //*** Копирование ***//
    copy: {
      build: {
        files: [{
          expand: true,
          cwd: "src/",
          src: [
            "css/**/*.css",
            "js/**/*.js",
            "fonts/**/*.{woff,woff2}",
            "img/**/*.{jpg,png,gif,svg}",
            "*.html",
            "favicon.ico"
          ],
          dest: "build"
        }]
      },
      html: {
        files: [{
          expand: true,
          cwd: "src/",
          src: ["*.html"],
          dest: "build"
        }]
      },
      img: {
        files: [{
          expand: true,
          cwd: "src/",
          src: ["img/**/*.{jpg,png,gif,svg}"],
          dest: "build"
        }]
      },
      js: {
        files: [{
          expand: true,
          cwd: "src/",
          src: ["js/**/*.js"],
          dest: "build"
        }]
      }
    },

    //*** Сборка и обработка HTML-файлов ***//
    processhtml: {
      target: {
        files: {
          "build/index.html": ["build/index.html"],
          "build/about.html": ["build/about.html"],
          "build/overview.html": ["build/overview.html"],
          "build/service.html": ["build/service.html"],
          "build/articles_rev.html": ["build/articles_rev.html"],
          "build/articles_serv.html": ["build/articles_serv.html"],
          "build/articles_beg.html": ["build/articles_beg.html"],
          "build/files.html": ["build/files.html"],
          "build/links.html": ["build/links.html"]
        }
      }
    },

    //*** Сборка CSS из LESS ***//
    less: {
      style: {
        files: {
          "build/css/style.css": "src/less/style.less"
        }
      }
    },

    //*** Обработка CSS: префиксование и "упаковка" медиа-запросов ***//
    postcss: {
      options: {
        processors: [
          require("autoprefixer")({browsers: [
            "last 2 versions",
            "> 1%"
          ]}),
          require("css-mqpacker")({
            sort: true
          })
        ]
      },
      style: {
        src: "build/css/style.css"
      }
    },

    //*** "Причесывание" CSS ***//
    csscomb: {
      style: {
        options: {
          config: "csscomb.json"
        },
        files: {
          "build/css/style.css": ["build/css/style.css"]
        }
      }
    },

    //*** Конкатенация CSS ***//
    concat: {
      css: {
        src: [ "build/css/normalize.css", "build/css/social-likes.css", "build/css/style.css" ],
        dest: "build/css/style.css",
        options: {
          separator: "\n\r/***** CONCATENATION HERE! *****/\n\r"
        }
      }
    },

    //*** Минификация CSS ***//
    csso: {
      style: {
        options: {
          report: "gzip"
        },
        files: {
          "build/css/style.min.css": ["build/css/style.css"]
        }
      }
    },

    //*** Минификация JS ***//
    uglify: {
      options: {
        mangle: false
      },
      scripts: {
        files: {
          "build/js/script.min.js": ["build/js/script.js"]
        }
      }
    },

    //*** Локальный сервер с обновлением браузера ***//
    browserSync: {
      server: {
        bsFiles: {
          src: [
            "build/*.html",
            "build/css/*.css",
            "build/img/**/*.{jpg,png,gif,svg}",
            "build/tmp/ugc/**/*.{jpg,png,gif,svg}",
            "build/js/**/*.js",
            "build/fonts/**/*.{woff,woff2}"
          ]
        },
        options: {
          server: "build/",
          watchTask: true,
          notify: false,
          open: true,
          ui: false
        }
      }
    },

    //*** Отслеживание изменений в исходниках ***//
    watch: {
      html: {
        files: ["src/**/*.html","src/tmp/ugc/*.html"],
        tasks: ["copy:html","processhtml"],
        options: {spawn: false}
      },
      img: {
        files: ["src/img/**/*.{jpg,png,gif,svg}","src/tmp/ugc/**/*.{jpg,png,gif,svg}"],
        tasks: ["copy:img"],
        options: {spawn: false}
      },
      js: {
        files: ["src/js/**/*.js"],
        tasks: ["copy:js","uglify"],
        options: {spawn: false}
      },
      style: {
        files: ["src/less/**/*.less","src/fonts/**/*.{woff,woff2}"],
        tasks: ["less", "postcss", "csscomb", "concat", "csso"],
        options: {spawn: false}
      }
    },

    //*** Отправка сборки в удаленную ветку "gh-pages" ***//
    "gh-pages": {
      options: {
        base: "build"
      },
      src: ["**/*", "!tmp/**/*"]
    },

    //*** Очистка директории на "боевом" сервере ***//
    secret: grunt.file.readJSON("authssh.json"),
    sshexec: {
      clean: {
        command: ["cd test.menshikov.su/www; rm -rf css img js fonts; rm -f *.html favicon.ico"],
        options: {
          host: "<%= secret.host %>",
          username: "<%= secret.username %>",
          password: "<%= secret.password %>"
        }
      }
    },

    //*** Отправка сборки на "боевой" сервер ***//
    scp: {
      options: {
        host: "<%= secret.host %>",
        username: "<%= secret.username %>",
        password: "<%= secret.password %>",
      },
      masterhost: {
        files: [{
            cwd: "build/",
            src: ["**/*", "!tmp/**/*"],
            filter: "isFile",
            dest: "test.menshikov.su/www"
        }]
      }
    }
  });

  grunt.registerTask("serve", [
    "browserSync",
    "watch"
  ]);

  grunt.registerTask("css", [
    "less",
    "postcss",
    "csscomb",
    "concat",
    "csso"
  ]);

  grunt.registerTask("build", [
    "clean",
    "copy:build",
    "processhtml",
    "css",
    "uglify",
  ]);

  grunt.registerTask("deploy", [
    "sshexec",
    "scp"
  ]);
};
