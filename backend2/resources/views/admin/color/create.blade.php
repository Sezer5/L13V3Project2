    @extends('layouts.adminlayout')
    @section('title')
        Colors
    @endsection
    @section('content')
         <main class="p-4">
            <div class="container-fluid">
                <h2 class="mb-4 fw-bold" style="color: var(--dark-color);">Colors</h2>
                <div class="card p-4 row">
                   <div class="col-md-4">
                    <form action="{{route('admin.color.store')}}" method="post">
                    @csrf
                        <div class="mb-3">
                            <label for="" class="form-label">Name</label>
                            <input
                                type="text"
                                class="form-control @error('name') is-invalid @enderror"
                                name="name"
                                value="{{old('name')}}"
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