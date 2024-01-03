// // @ts-nocheck
// import R, { asyncStorage, openInEditor, trackGlobalErrors } from 'reactotron-react-native';
// import { MMKV } from 'react-native-mmkv';
//
// declare global {
//   interface Console {
//     tron: any;
//   }
// }
//
// const Reactotron = R.setAsyncStorageHandler(MMKV)
//   .configure()
//   .use(openInEditor())
//   .use(asyncStorage({}))
//   .use(trackGlobalErrors({}))
//   .useReactNative({
//     networking: {
//       ignoreUrls: /symbolicate/,
//     },
//   })
//   .connect();
//
// Reactotron.clear();
//
// console.tron = Reactotron;
//
// export default Reactotron;
