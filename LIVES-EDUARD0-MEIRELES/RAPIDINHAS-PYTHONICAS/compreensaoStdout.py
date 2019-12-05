from io import StringIO
from unittest import main, TestCase
# pega a função e encapsula num contexto, pra "mentir" como ela funciona
from unittest.mock import patch

def stdout(string):
    return(string)

class Test_stdout(TestCase):
    def test_stdout(self):
        resultado_esperado = "Rapidinha de Python"

        # coloque no arquivo de saida sys o resultado esperado de algum teste fake
        with patch('sys.stdout', new=StringIO()) as fake_out:
            stdout(resultado_esperado)
            self.assertEqual(fake_out.getvalue(), resultado_esperado)

if __name__ == '__main__':
    main()