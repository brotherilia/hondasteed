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

          "build/diary_3.html": ["build/diary_3.html"],

          "build/overview.html": ["build/overview.html"],
          "build/service.html": ["build/service.html"],

          "build/files.html": ["build/files.html"],
          "build/links.html": ["build/links.html"],

          "build/manual_cont.html": ["build/manual_cont.html"],
          "build/mainten_sched.html": ["build/mainten_sched.html"],
          "build/parts_compare.html": ["build/parts_compare.html"],
          "build/steed_modif.html": ["build/steed_modif.html"],

          "build/gallery.html": ["build/gallery.html"],
          "build/gallery1.html": ["build/gallery1.html"],
          "build/gallery2.html": ["build/gallery2.html"],
          "build/gallery3.html": ["build/gallery3.html"],
          "build/gallery4.html": ["build/gallery4.html"],
          "build/gallery6.html": ["build/gallery6.html"],
          "build/gallery7.html": ["build/gallery7.html"],
          "build/gallery8.html": ["build/gallery8.html"],
          "build/gallery9.html": ["build/gallery9.html"],
          "build/gallery10.html": ["build/gallery10.html"],
          "build/gallery11.html": ["build/gallery11.html"],
          "build/gallery12.html": ["build/gallery12.html"],
          "build/gallery13.html": ["build/gallery13.html"],
          "build/gallery14.html": ["build/gallery14.html"],
          "build/gallery15.html": ["build/gallery15.html"],
          "build/gallery17.html": ["build/gallery17.html"],
          "build/gallery20.html": ["build/gallery20.html"],
          "build/gallery22.html": ["build/gallery22.html"],

          "build/steedbreed.html": ["build/steedbreed.html"],
          "build/sb_accessoires.html": ["build/sb_accessoires.html"],
          "build/sb_append_1.html": ["build/sb_append_1.html"],
          "build/sb_append_2.html": ["build/sb_append_2.html"],
          "build/sb_append_3.html": ["build/sb_append_3.html"],
          "build/sb_charging.html": ["build/sb_charging.html"],
          "build/sb_cooling.html": ["build/sb_cooling.html"],
          "build/sb_frame_etc.html": ["build/sb_frame_etc.html"],
          "build/sb_frontwheel.html": ["build/sb_frontwheel.html"],
          "build/sb_fuelsystem.html": ["build/sb_fuelsystem.html"],
          "build/sb_hydrabrake.html": ["build/sb_hydrabrake.html"],
          "build/sb_ignition.html": ["build/sb_ignition.html"],
          "build/sb_lights_switches.html": ["build/sb_lights_switches.html"],
          "build/sb_lubricat.html": ["build/sb_lubricat.html"],
          "build/sb_maintenance.html": ["build/sb_maintenance.html"],
          "build/sb_meters.html": ["build/sb_meters.html"],
          "build/sb_steering.html": ["build/sb_steering.html"],
          "build/sb_transmission.html": ["build/sb_transmission.html"],

          "build/articles_rev.html": ["build/articles_rev.html"],
          "build/articles_serv.html": ["build/articles_serv.html"],
          "build/articles_beg.html": ["build/articles_beg.html"],

          "build/articles_beg_1.html": ["build/articles_beg_1.html"],
          "build/articles_beg_2.html": ["build/articles_beg_2.html"],
          "build/articles_beg_3.html": ["build/articles_beg_3.html"],

          "build/articles_serv_0.html": ["build/articles_serv_0.html"],
          "build/articles_serv_1.html": ["build/articles_serv_1.html"],
          "build/articles_serv_2.html": ["build/articles_serv_2.html"],
          "build/articles_serv_3.html": ["build/articles_serv_3.html"],
          "build/articles_serv_4.html": ["build/articles_serv_4.html"],
          "build/articles_serv_5.html": ["build/articles_serv_5.html"],
          "build/articles_serv_6.html": ["build/articles_serv_6.html"],
          "build/articles_serv_7.html": ["build/articles_serv_7.html"],
          "build/articles_serv_8.html": ["build/articles_serv_8.html"],
          "build/articles_serv_9.html": ["build/articles_serv_9.html"],
          "build/articles_serv_10.html": ["build/articles_serv_10.html"],
          "build/articles_serv_11.html": ["build/articles_serv_11.html"],
          "build/articles_serv_12.html": ["build/articles_serv_12.html"],
          "build/articles_serv_13.html": ["build/articles_serv_13.html"],
          "build/articles_serv_14.html": ["build/articles_serv_14.html"],
          "build/articles_serv_15.html": ["build/articles_serv_15.html"],
          "build/articles_serv_16.html": ["build/articles_serv_16.html"],
          "build/articles_serv_17.html": ["build/articles_serv_17.html"],
          "build/articles_serv_18.html": ["build/articles_serv_18.html"],
          "build/articles_serv_19.html": ["build/articles_serv_19.html"],
          "build/articles_serv_20.html": ["build/articles_serv_20.html"],
          "build/articles_serv_21.html": ["build/articles_serv_21.html"],

          "build/articles_rev_1.html": ["build/articles_rev_1.html"],
          "build/articles_rev_2.html": ["build/articles_rev_2.html"],
          "build/articles_rev_3.html": ["build/articles_rev_3.html"],
          "build/articles_rev_4.html": ["build/articles_rev_4.html"],
          "build/articles_rev_5.html": ["build/articles_rev_5.html"],
          "build/articles_rev_6.html": ["build/articles_rev_6.html"],
          "build/articles_rev_7.html": ["build/articles_rev_7.html"],
          "build/articles_rev_8.html": ["build/articles_rev_8.html"],
          "build/articles_rev_9.html": ["build/articles_rev_9.html"],
          "build/articles_rev_10.html": ["build/articles_rev_10.html"]
        }
      }
    },

    //*** Сборка CSS из LESS ***//
    less: {
      style: {
        files: {
          "build/css/style--dark.css": "src/less/style--dark.less"
        }
      },
      stylelight: {
        files: {
          "build/css/style--light.css": "src/less/style--light.less"
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
        src: "build/css/style--dark.css"
      },
      stylelight: {
        src: "build/css/style--light.css"
      }
    },

    //*** "Причесывание" CSS ***//
    csscomb: {
      style: {
        options: {
          config: "csscomb.json"
        },
        files: {
          "build/css/style--dark.css": ["build/css/style--dark.css"],
          "build/css/style--light.css": ["build/css/style--light.css"]
        }
      }
    },

    //*** Конкатенация CSS ***//
    concat: {
      css: {
        src: [ "build/css/normalize.css", "build/css/social-likes.css", "build/css/fonts.css", "build/css/style--dark.css" ],
        dest: "build/css/style--dark.css",
        options: {
          separator: "\n\r/***** CONCATENATION HERE! *****/\n\r"
        }
      },
      csslight: {
        src: [ "build/css/normalize.css", "build/css/social-likes.css", "build/css/fonts.css", "build/css/style--light.css" ],
        dest: "build/css/style--light.css",
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
          "build/css/style--dark.min.css": ["build/css/style--dark.css"],
          "build/css/style--light.min.css": ["build/css/style--light.css"]
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
        files: ["src/**/*.html"],
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
        command: ["cd hondasteed.org.ru/www; rm -rf css img js fonts; rm -f *.html favicon.ico"],
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
            dest: "hondasteed.org.ru/www"
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
