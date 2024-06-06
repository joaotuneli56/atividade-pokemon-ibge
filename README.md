# Comando para rodar o json.db
```
npm install -g json-server
```

# Inicie o servidor json-server, apontando para o arquivo db.json que você criou:

```
json-server --watch db.json
```

## Usando um HttpClient para inserir no db.json.

```typescript
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Métodos para adicionar, atualizar, excluir posts, etc.
}

```
