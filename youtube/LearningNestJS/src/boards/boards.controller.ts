import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BoardStatus } from './board-status.enum';
import { Board } from './board.entity';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pope';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}
  // @Get('/')
  // gerAllBoard(): Board[] {
  //   return this.boardsService.getAllBoards();
  // }
  // @Post()
  // @UsePipes(ValidationPipe)
  // createBoard(@Body() createBoardDto: CreateBoardDto): Board {
  //   console.log('createBoardDto', createBoardDto);
  //   return this.boardsService.createBoaed(createBoardDto);
  // }
  @Get('/:id')
  getBoardById(@Param('id') id: number): Promise<Board> {
    return this.boardsService.getBoardById(id);
  }
  // @Get('/:id')
  // getBoardById(@Param('id') id: string) {
  //   return this.boardsService.getboardById(id);
  // }
  // @Delete('/:id')
  // deleteBoard(@Param('id') id: string): void {
  //   this.boardsService.deleteBoard(id);
  // }
  // @Patch('/:id/status')
  // updateBoardStatus(
  //   @Param('id') id: string,
  //   @Body('status', BoardStatusValidationPipe) status: BoardStatus,
  // ) {
  //   return this.boardsService.updateBoardStatus(id, status);
  // }
}
//타입 설정은 선택사항이지만, 다른 타입이 들어가면 에러가 발생하고, 다른 사람이 예측 가능해진다.
//DTO 데이터 유효성 판단
//@Body @Param
/* pipe 요청에 대해서 data transformation, data validation
1) handler-level pipes
2) parameter-level pipes
3) global pipes

built in -> 6개
*/
