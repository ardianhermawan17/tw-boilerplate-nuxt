<script>
export default {
  name: 'DocumentationAutoSearch',
  middleware({ route, redirect }) {
    if (route.name === 'documentation/auto-search') {
      return redirect('/documentation/auto-search/filter-search')
    }
  }
}
</script>
