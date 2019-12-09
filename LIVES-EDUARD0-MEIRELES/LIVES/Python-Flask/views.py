from flask import jsonify
def configure(app):

    @app.route("/")
    def hello():
        return "Hello World!"


    @app.route("/api")
    def api():
        return jsonify(data={'name': 'Lili'})
