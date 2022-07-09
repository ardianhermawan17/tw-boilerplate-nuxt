<script>
export default {
  name: 'DocumentationAdmin',
  middleware({ route, redirect }) {
    if (route.name === 'admin') {
      return redirect('/admin/peraturan')
    }
  }
}
</script>
