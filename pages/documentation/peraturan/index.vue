<script>
export default {
  name: 'DocumentationPeraturan',
  middleware({ route, redirect }) {
    if (route.name === 'documentation/peraturan') {
      return redirect('/documentation/peraturan/get')
    }
  }
}
</script>
