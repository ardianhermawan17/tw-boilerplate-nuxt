<script>
export default {
  name: 'DocumentationKeyword',
  middleware({ route, redirect }) {
    if (route.name === 'documentation/keyword') {
      return redirect('/documentation/keyword/keyword')
    }
  }
}
</script>
