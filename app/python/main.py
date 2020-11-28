__author__ = 'Jesse Bartola'

from flask import Flask, render_template, send_from_directory
import os

app = Flask(__name__, static_folder="../www/static",
            template_folder="../www/static/templates")


if app.debug is not True:
    import logging
    from logging.handlers import RotatingFileHandler
    file_handler = RotatingFileHandler(
        'errors.log', maxBytes=1024 * 1024 * 100, backupCount=20)
    file_handler.setLevel(logging.ERROR)
    formatter = logging.Formatter(
        "%(asctime)s - %(name)s - %(levelname)s - %(message)s")
    file_handler.setFormatter(formatter)
    app.logger.addHandler(file_handler)


# Index route
@app.route('/')
def index():
    return render_template("index.html")


# Resume route
@app.route('/resume')
def resume():
    return send_from_directory('../www/static/img/', 'ResumeFinal.pdf')


if __name__ == "__main__":
    from waitress import serve

    if os.environ.get('ENVIRONMENT', 'prod') == 'dev':
        app.run(debug=True, host='0.0.0.0', port=os.environ.get('PORT', 3000))
    else:
        app.logger.info('Starting production server...')
        serve(app, host='0.0.0.0', port=os.environ.get('PORT', 3000))
