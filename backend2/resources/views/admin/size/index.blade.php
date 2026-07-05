    @extends('layouts.adminlayout')
    @section('title')
        Sizes
    @endsection
    @section('content')
         <main class="p-4">
            <div class="container-fluid">
                <h2 class="mb-4 fw-bold" style="color: var(--dark-color);">Sizes</h2>
                <div class="card p-4 row">
                    <div class="mb-3">
                        <a href="{{route('admin.size.create')}}">
                            <button class="btn btn-sm btn-success"><i class="bi bi-plus"></i> Add</button>
                        </a>
                    </div>
                    <div>
                        <table class="table table-bordered table-responsive">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Slug</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($sizes as $size)
                                    <tr>
                                        <td>{{$size->id}}</td>
                                        <td>{{$size->name}}</td>
                                        <td>{{$size->slug}}</td>
                                        <td>
                                            <a href="{{route('admin.size.edit',$size->slug)}}" class="btn btn-warning btn-sm"><i class="bi bi-pencil"></i></a>
                                        </td>
                                        <td>
                                            <a href="#" class="btn btn-danger btn-sm" onclick="deleteItem({{$size->id}})"><i class="bi bi-trash"></i></a>
                                            <form id="{{$size->id}}" action="{{route('admin.size.destroy',$size->slug)}}" method="post">
                                                @csrf
                                                @method('DELETE')
                                            </form>
                                        </td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    @endsection