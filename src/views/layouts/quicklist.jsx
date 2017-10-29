import * as React from "react";
import Person from "./person";
import { Observable } from "rxjs";

export default class QuickList extends React.Component {

  constructor(props) {
    super();

    this.state = {
      list: [{ cpf: "000-000-000-00", name: "Unknown", age: 0 }]
    };

    setInterval(() => {
      this.updateList();
    }, 1000);
  }

  updateList() {

    var data = JSON.stringify({});
    var promise = fetch("/get/list", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: data
    })
      .catch((err) => { throw new Error("Erro ao buscar lista atualizada: " + err.status); })
      .then((res) => res.json());

    Observable.fromPromise(promise)
      .subscribe((value) => this.setState({
        list: value
      }));
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Cpf</th>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.list.map((value) => {
                return <Person key={value.cpf} person={value} />
              })
            }
          </tbody>
        </table>
      </div >
    );
  }
}