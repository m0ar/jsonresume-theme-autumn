# JSON Resume theme
This is my adaptation of the fine Autumn theme by @lorenzodalaqua.

It generates HTML and pdf artefacts from a [JSON Resume](https://jsonresume.org/).
The main branch automatically deploys to Cloudflare Pages on my domain:
https://resume.hubinette.me

## Development
The theme is built using Gulp for compiling handlebars templates and
Tailwind CSS.

To customize this theme or use this as a template to write your own you will
need node.js and NPM installed on your system.

1. Clone this repository
1. install the dependencies with `npm install`
1. `npm run dev` starts a webserver
1. View at `localhost:6660` (should open automcatically)
1. Theme falls back to `resume-sample.json` when `resume.json` does not exist.
1. Add your resume file `resume.json` to the project/theme's root folder
    1. Put in the same location as `resume-sample.json`
    1. ...or put it in your project root if using this theme as a package.

Any changes you make to any file in the `views` and `styles` folders will be
reflected in the result (you still need to refresh the page).

## License
Available under [the MIT license](http://mths.be/mit),
original copyright by Lorenzo Dal'Aqua.
