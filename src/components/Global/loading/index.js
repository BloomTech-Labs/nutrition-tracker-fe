export { default as WithLoading } from "./withLoading";

/* If you like to use this Loading HOC, then import this file into the components file you'd like. Though, this will most likely be your index.js file
   you are using to build a parent component:

    1)import { WithLoading } from "../Global/loading";

    2) Now wrap your component in the imported HOC :

        const YourComponentWithLoading = WithLoading(SomeAxiosDependantComponent)

    3) Now implement your wrapped HOC component in the render() func like usual with one caveaut, we add the "isLoading" attribute to our
       component and hook it with our redux action boolean for <SomeAxiosDependantComponent /> fetching process:

                render(){
                    return(
                       <YourComponentWithLoading isLoading = {this.props.isFetching} {...props}/>
                    )
                }

    4)That's it, you have a cool wrapped component for Loading!

    */
