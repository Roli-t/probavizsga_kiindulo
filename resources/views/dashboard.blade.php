<head>  
<meta name="csrf-token" content=<?php $token=csrf_token(); echo $token;?>>
</head>

<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Számalk-Szalézi technikum és Szakgimnázium 2020-2022 évfolyam szoftverfejlesztőinek szakdolgozatai') }}
        </h2>
    </x-slot>
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
                   <section class="szakdogalista">
                        <table cellspacing="0">
                                <tbody>
                                    <thead>
                                        <tr>
                                            <th>Szakdolgozat címe</th>
                                            <th>Készítők neve</th>
                                            <th>GitHub link</th>
                                            <th>Szakdolgozat elérhetősége</th>
                                        </tr>
                                    </thead>
                                </tbody>
                        </table>
                    </section>
                            <aside class="fejlec">
                                <table>
                                    <tr style="display: none">
                                        <td class="szakdogacime">Szakdolgozat címe</td>
                                        <td class="tagok">Készítők neve</td>
                                        <td class="githublink">GitHub link</td>
                                        <td class="oldallink">Szakdolgozat elérhetősége</td>
                                        <td><button class="torolGomb">Törlés</button></td>
                                        <td><button class="szerkesztGomb">Szerkesztés</button></td>
                                    </tr>
                                </table>
                            </aside>
</section>
                        </div>
                    </div>

                    <div class="ujadat">
                        <form>
                        @csrf <!-- {{ csrf_field() }} -->
                            <div style="display:none"><input type="text" id="id"></div>
                            <div class="sor"><label for="szakdoga_nev">Szakdolgozat címe</label><input type="text" id="szakdoga_nev"></div>
                            <div class="sor"><label for="tagokneve">Készítők neve</label><input type="text" id="tagokneve"></div>
                            <div class="sor"><label for="githublink"> GitHub elérhetőség</label><input type="text" id="githublink"></div>
                            <div class="sor"><label for="oldallink">Az oldal elérhetősége </label><input type="text" id="oldallink"></div>
                            <div class="gomb"><button id="uj">Új</button>
                                <button id="modosit">Módosít</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
