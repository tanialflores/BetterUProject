
<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\View;
use Snappy\Facades\SnappyPdf;
use Knp\Snappy\Pdf;

class PdfController extends Controller
{
    public function generarPdf(Request $request)
    {
        $pdf = view('pdf.index', compact("datos", 'image'))->render();
        $pdf = PDF::loadHTML($pdf)->setPaper('a4')->setWarnings(false);
        $pdf = $pdf->output();
        Storage::disk('credit_notes')->makeDirectory("pdf/");
        Storage::disk('credit_notes')->put("pdf/" . "pdf.pdf", $pdf);
        $rutaArchivo = storage_path('app/pdf/pdf.pdf');
        return response()->download($rutaArchivo);
    }
}