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
        $request->validate([
           'szakdolgozatCime'=>'required',
           'keszitokNeve'=>'required',
           'oldalElerhetosege'=>'required',
           'gitHubElerhetosege'=>'required',
       ]);
       $uj =new szakdoga;
       $uj->szakdoga_nev=$request->szakdolgozatCime;
       $uj->githublink=$request->gitHubElerhetosege;
       $uj->oldallink=$request->oldalElerhetosege;
       $uj->tagokneve=$request->keszitokNeve;
       $uj -> save();
       return response()->json(true);

   }
   public function destroy(string $id){
    $szakdoga=szakdoga::find($id);
    $szakdoga->delete();
    return response()->json(true);
}
public function update(Request $request, string $id){
    $request->validate([
        'cime'=>'required',
        'neve'=>'required',
        'oldalElerhetosege'=>'required',
        'gitHubElerhetosege'=>'required'
    ]);
    szakdoga::find($id)
    ->update(['szakdoga_nev' => $request -> cime,
        'githublink' => $request -> gitHubElerhetosege,
        'tagokneve' => $request -> neve,
        'oldallink' => $request -> oldalElerhetosege,]);

    return response()->json(true);
}
}
