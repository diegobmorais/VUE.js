<template>
  <div class="h-100 p-5 bg-light boder rounded-3">
    <h2>Pesquisar Vaga</h2>

    <div class="row">
      <div class="col">
        <div class="form-group">
          <label>Titulo da vaga</label>
          <input type="text" class="form-control" />
          <small>Informe palavras que estejam relacionadas com a vaga</small>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <button class="btn btn-outline-dark mt-2" type="button">Buscar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default{
    name: 'PesquisarVaga'
}
</script>
