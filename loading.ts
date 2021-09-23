{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    state: 'fail';
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  function printLoginState(state: ResourceLoadState){

    // if(state.state === 'loading'){
    //   return console.log(`👀 ${state.state}`);
    // }else if(state.state === 'success'){
    //   return console.log(`😃 ${state.response.body}`);
    // }else{
    //   return console.log(`😱 ${state.reason}`);
    // }

    switch(state.state){
      case 'loading' : 
        console.log(`👀 ${state.state}`);
        break;
      case 'success' : 
        console.log(`😃 ${state.response.body}`);
        break;
      case 'fail' : 
        console.log(`😱 ${state.reason}`);
        break;
      default:
        throw new Error(`unknown state : ${state}`);
      
    }


  }

  printLoginState({ state: 'loading' }); // 👀 loading...
  printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
  printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network
}
