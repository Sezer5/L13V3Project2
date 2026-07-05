    @extends('layouts.adminlayout')
    @section('title')
        Sizes
    @endsection
    @section('content')
         <main class="p-4">
            <div class="container-fluid">
                <h2 class="mb-4 fw-bold" style="color: var(--dark-color);">Sizes</h2>
                <div class="card p-4 row">
                   <div class="col-md-4">
                    <form action="{{route('admin.size.update',$size->slug)}}" method="post">
                    @csrf
                    @method('PUT')
                        <div class="mb-3">
                            <label for="" class="form-label">Name</label>
                            <input
                                type="text"
                                class="form-control @error('name') is-invalid @enderror"
                                name="name"
                                value="{{$size->name,old('name')}}"
                            />
                            @error('name')
                                <span class="invalid-feedback">{{$message}}</span>
                            @enderror
                        </div>
                        <div class="mb-3 text-end">
                           <button class="btn btn-success btn-sm" type="submit">
                                Submit
                           </button>
                        </div>
                        
                   </form>
                   </div>
                </div>
            </div>
        </main>
    @endsection