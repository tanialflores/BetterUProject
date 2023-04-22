
<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\View;
use Snappy\Facades\SnappyPdf;

class PdfController extends Controller
{
    public function generarPdf(Request $request)
    {
        // Obtener el contenido HTML a partir de la vista
        $html = View::make('pdf.vista')->render();

        // Generar el PDF y devolverlo como una descarga
        return SnappyPdf::loadHTML($html)
            ->download('documento.pdf');
    }
}