module.exports = grunt => {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		cssmin: {
			options: {
			  mergeIntoShorthands: false,
			  roundingPrecision: -1
			},
			target: {
			  files: {
				'css/min.css': ['css/index.css']
				}
			}
		},
		sass: {
			dist: {
				files: {
					'css/index.css' : 'scss/index.scss'
				}
			}
		},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass', 'cssmin']
			},
			js: {
				files: '**/*.js',
				tasks: ['uglify']
			}
		},
		uglify: {
			options: {
				mangle: false
			  },
			my_target: {
			  files: {
				'dist/index.js': ['js/main.js']
			  }
			}
		},
	});
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify-es');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['sass', 'uglify', 'cssmin', 'watch']);
}
