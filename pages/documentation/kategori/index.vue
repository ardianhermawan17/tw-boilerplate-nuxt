<script>
export default {
  name: 'DocumentationKategori',
  middleware({ route, redirect }) {
    if (route.name === 'documentation/kategori') {
      return redirect('/documentation/kategori/get')
    }
  }
}
</script>
