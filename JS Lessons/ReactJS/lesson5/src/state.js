import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './sass/style.css'


class Book extends Component{

    constructor(props){
        super(props);
        this.newBook = this.newBook.bind
        this.state = {
                author:"Geroge Orwell",
                bookName: '1984',
                pageCount: 190
        }
    }

    newBook(){
        this.setState({
           
            author:"Lev Tolstoy",
            bookName: 'Insan ne ile yasar',
            pageCount: 170
         
            
          
        });
    }
        render(){
            return(
            <div className="container">
                    <h1>My Book List</h1>
                    <ul>
                        <li><b>Author</b>: <i>{this.state.author}</i></li>
                        <li><b>Book Name</b>: <i>{this.state.bookName}</i></li>
                        <li><b>Page Count</b>: <i>{this.state.pageCount}</i></li>
                    </ul>
                <button onClick={this.newBook} className="btn btn-success">New Book</button>
            </div>
            );
        }
}











ReactDOM.render(<Book />,document.getElementById('root')
);






















