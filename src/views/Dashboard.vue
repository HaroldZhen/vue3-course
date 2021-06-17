<template>
  <div class="container-fluid px-0">
    <div class="row g-0">
      <div class="col-2 bg-light">
        <div class="main">
          <div class="d-flex flex-column p-3  w-100">
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
              <span class="fs-4">後台管理</span>
            </a>
            <hr />
            <ul class="nav nav-pills flex-column mb-auto">
              <li class="nav-item">
                <a href="#" class="nav-link active" aria-current="page">
                  <i class="bi bi-house-door-fill"></i>
                  Home
                </a>
              </li>
              <li>
                <router-link to="/" class="nav-link link-dark">前台</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-10">
        <div class="p-3">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.main {
  display: flex;
  flex-wrap: nowrap;
  height: 100vh;
  overflow-x: auto;
  overflow-y: hidden;
}
.main > * {
  flex-shrink: 0;
}

.b-example-divider {
  width: 1.5rem;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow: inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1), inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
}

.bi {
  vertical-align: -0.125em;
  pointer-events: none;
  fill: currentColor;
}

.dropdown-toggle {
  outline: 0;
}

.nav-flush .nav-link {
  border-radius: 0;
}

.scrollarea {
  overflow-y: auto;
}

.fw-semibold {
  font-weight: 600;
}
.lh-tight {
  line-height: 1.25;
}
</style>
