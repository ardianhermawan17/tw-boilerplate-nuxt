<script>
export default {
  name: 'Auth',
  middleware({ route, redirect }) {
    if (route.name === 'auth') {
      return redirect('/auth/login')
    }
  }
}
</script>
