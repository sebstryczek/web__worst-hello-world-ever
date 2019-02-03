import authConnector from './auth.redux/auth.connector';

const Auth = props => (
  props.children({
    isAuthenticated: props.isAuthenticated,
    token: props.token,
    signUp: props.signUp,
    signIn: props.signIn,
    signOut: props.signOut,
  })
)

export default authConnector( Auth );
