<script>
export default {
  name: 'DocumentationAuth',
  middleware({ route, redirect }) {
    if (route.name === 'documentation/auth') {
      return redirect('/documentation/auth/login')
    }
  }
}
</script>
