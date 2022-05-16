<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\szakdoga;

class SzakdogaController extends Controller
{
    public function index(){
        $tabla= DB::table('szakdogas')->get();
        return response()->json($tabla);
    }

    public function store(Request $request){
       $uj =new szakdoga();
       $uj->szakdoga_nev=$request->szakdoga_nev;
       $uj->githublink=$request->githublink;
       $uj->oldallink=$request->oldallink;
       $uj->tagokneve=$request->tagokneve;
       $uj -> save();

   }
   public function destroy($id){
    $szakdoga=szakdoga::find($id);
    $szakdoga->delete();
}
public function update(Request $request, $id){
    
    szakdoga::find($id)
    ->update(['szakdoga_nev' => $request -> szakdoga_nev,
        'githublink' => $request -> githublink,
        'tagokneve' => $request -> tagokneve,
        'oldallink' => $request -> oldallink,]);
}
}
