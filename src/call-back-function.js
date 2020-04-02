const rootHandle = document.getElementById('root')

        class Counter extends React.Component {

            constructor() { 
                super() 
                this.state = { 
                    count: 0
                }
            }

            handleUp = () => {
                // async
               this.setState(prevState => ({
                   count: prevState.count + 1
               }), () => {
                   console.log('callback', this.state)
               })
               console.log('handle up function', this.state)
             
            }


            render() { 
                console.log('render',this.state)
                return (
                    <div>
                        <h1> {this.state.count} </h1>
                        <button onClick={this.handleUp}> up </button>
                       
                    </div>
                )
            }
        }

        ReactDOM.render(<Counter />, rootHandle)