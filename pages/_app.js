import { store } from "@/store";
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';

export default function MyApp({ Component, pageProps }) {
  return(
    <Provider store={store}>
     <Component {...pageProps} />
    </Provider>
     );
}
