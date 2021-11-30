<template>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
               <router-link class="nav-link" to="/cliente">Cliente</router-link> 
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/cpu">Indicador de Cpu</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/drive">Indicador de Drive</router-link>
            </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/memoria"> Indicador de Memoria</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/netstat">Netstat</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/os">Os</router-link>
            </li>
          
          </ul>
        </div>
      </div>
    </nav>
  <div class="container mt-3">

  <router-view/>
  </div>


  
</template>

<style>

</style>
