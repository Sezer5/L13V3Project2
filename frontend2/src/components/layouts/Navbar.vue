<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary border shadow mb-3">
    <div class="container-fluid">
        <div class="d-flex align-items-center p-3">
            <img :src="'https://cdn.pixabay.com/photo/2012/04/16/11/34/shopping-35594_1280.png'" width="60"><h2>Shop T-Shirt</h2>
        </div>
        
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <router-link class="nav-link active" aria-current="page" to="/"><i class="bi bi-house-fill"></i> Home</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link active" aria-current="page" to="/register"><i class="bi bi-person-fill"></i> Register</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link active" aria-current="page" to="/login"><i class="bi bi-person-fill"></i> Login</router-link>
            </li>
            
            <!-- <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                </a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </li> -->
            
        </ul>
        <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
        </div>
    </div>
</nav>
</template>
<script setup></script>

<style scoped>

</style>