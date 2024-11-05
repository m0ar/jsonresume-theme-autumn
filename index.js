const fs = require('fs');
const handlebars = require('handlebars');
const wax = require('handlebars-wax');

// Get file and directory names for build
const {
  VIEWS_DIR,
  PARTIALS_DIR,
  TEMPLATE_FILENAME,
  CSS_FILENAME,
  helpers
} = require('./build-config');

handlebars.registerHelper(helpers);

function render(resume) {
  const Handlebars = wax(handlebars);
  const css = fs.readFileSync(`${__dirname}/${CSS_FILENAME}`, 'utf-8');
  const resumeTemplate = fs.readFileSync(
    `${VIEWS_DIR}/${TEMPLATE_FILENAME}`,
    'utf-8'
  );

  Handlebars.partials(`${PARTIALS_DIR}/*.hbs`);

  return Handlebars.compile(resumeTemplate)({
    css: css,
    resume: resume,
    data: { isPdf: process.env.RESUME_TYPE === "pdf" }
  });
}

module.exports = {
  render: render,
  pdfRenderOptions: {
    format: 'A4',
    mediaType: 'print',
    margin: {
      top: '1cm',
      bottom: '1cm',
      left: '0cm',
      right: '0cm',
    }
  }
};
