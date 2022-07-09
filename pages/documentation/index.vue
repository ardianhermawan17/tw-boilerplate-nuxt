<script>
export default {
  name: 'Documentation',
  middleware({ route, redirect }) {
    if (route.name === 'documentation') {
      return redirect('/documentation/peraturan/get')
    }
  }
}
</script>
