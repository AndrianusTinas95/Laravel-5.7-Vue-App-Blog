@extends('layouts.master') 
@section('content') {{--
<div class="animated fadeIn"> --}} {{--
    <div class="row"> --}}

        <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                    <strong class="card-title">Tes Table</strong>
                    <button type="button" class="btn btn-sm btn-outline-primary ">add</button>
                </div>
                <div class="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Judul</th>
                                <th>Konten</th>
                                <th>Penulis</th>
                                <th>Ketagori</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td scope="row">tes</td>
                                <td>tes</td>
                                <td>td</td>
                            </tr>
                            <tr>
                                <td scope="row">td</td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>


        {{-- </div> --}} {{-- </div> --}}
<!-- .animated -->
@endsection
 
@section('scripts')
@endsection