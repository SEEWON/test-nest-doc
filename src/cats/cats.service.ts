import { Injectable } from "@nestjs/common";
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
    private readonly cats: Cat[] = [];

    create(cat: Cat) {
        this.cats.push(cat);
    }

    findAll(): Cat[] {
        return this.cats;
    }

    getHi(): string {
        return 'Hello World!';
    }
}

// Controller은 HTTP request 처리. 더 복잡한 task는 provider에게 맡김.
// CatsService는 Data 저장/꺼내기에 사용. CatsController에 의해 사용.