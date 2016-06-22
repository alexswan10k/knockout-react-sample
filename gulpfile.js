var gulp = require("gulp");
var rename = rename = require("gulp-rename");
var replace = replace = require('gulp-replace-task');
var del = require('del');

const count = 500;

gulp.task('clean', () =>{
    return del([
        "./ts/**/*.js",
        "./ts/**/*.js.map"
    ])
});

gulp.task('genclean', () =>{
    return del(["./ts/KnockoutComponents/Generated/**/*"]);
});

gulp.task("generate", ()  =>{

    var names = [''];names.pop();//give me intellisense

    for(var i = 0; i < count; i++){
        var name = "generated" + i;
        names.push(name);
        gulp.src("./ts/KnockoutComponents/generated.ts.tmpl")
            .pipe(rename(name + ".ts"))
            .pipe(replace({
                patterns:[
                    {
                        match: 'name',
                        replacement: name
                    }
                ]
            }))
            .pipe(gulp.dest("./ts/KnockoutComponents/Generated/")) ;    

        gulp.src("./ts/KnockoutComponents/generated.html.tmpl")
            .pipe(rename(name + ".html"))
            .pipe(replace({
                patterns:[
                    {
                        match: 'name',
                        replacement: name
                    }
                ]
            }))
            .pipe(gulp.dest("./ts/KnockoutComponents/Generated/")) ;      
    }


    gulp.src("./ts/KnockoutComponents/registergenerated.ts.tmpl")
        .pipe(rename("registergenerated.ts"))
        .pipe(replace({
            patterns:[
                {
                    match: 'registration',
                    replacement: names.map(n => `registerKo("${n}", "./ts/KnockoutComponents/Generated", "${n}");`)
                        .join("\r\n")
                }
            ]
        }))
        .pipe(gulp.dest("./ts/KnockoutComponents/Generated"));

    gulp.src("./ko-many-different-components.html.tmpl")
        .pipe(rename("ko-many-different-components.html"))
        .pipe(replace({
            patterns:[
                {
                    match: 'components',
                    replacement: names.map(n => `<${n}></${n}>`)
                        .join("")
                }
            ]
        }))
        .pipe(gulp.dest("./"));

});