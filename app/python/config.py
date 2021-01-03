from flask_talisman import Talisman


def configure_app(app):
    configure_https(app)
    configure_headers(app)


def configure_headers(app):
    # Set static file cache to 1 year
    app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 31536000


def configure_https(app):
    # Force all requests to route through https
    csp = {
        'default-src': [
            '\'self\''
        ],
        'style-src': [
            '\'self\'',
            '\'unsafe-inline\'',
            '*.fontawesome.com',
            '*.googleapis.com',  # For the actual font-family stylesheet
        ],
        'script-src': [
            '\'self\'',
            'www.googletagmanager.com',
            '*.google-analytics.com',
            '\'sha256-9SVeMjGdU9ISJUJKM5uwtoDP31cKS+0c9sE/d6WYeEc=\''
        ],
        'img-src': [
            '\'self\'',
            'www.google-analytics.com'
        ],
        'font-src': [
            '\'self\'',
            '*.fontawesome.com',
            '*.gstatic.com'  # For fonts associated with google
        ],
        'connect-src': [
            '\'self\'',
            'api.github.com',
            '*.google-analytics.com',
        ]
    }

    Talisman(app, content_security_policy=csp)
