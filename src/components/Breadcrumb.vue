<template>
  <div class="breadcrumb my-0">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb my-2">
        <li class="breadcrumb-item align-baseline">
          <router-link aria-current="page" to="/">Home</router-link>
        </li>
        <slot></slot>
      </ol>
    </nav>
  </div>
</template>
