from flask import Blueprint

bp = Blueprint('contract',__name__,url_prefix='/contract')

@bp.route('/')
def contract():
    return 'Nos contrate'


def configure(app):
    app.register_blueprint(bp)