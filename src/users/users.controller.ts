import { Controller, Post, Body } from '@nestjs/common';
import { GithubCodeDto } from './dto/github-code.dto';
import UsersService from './users.service';

@Controller('user')
export default class UsersController {
  constructor(
    private readonly usersService: UsersService,
  ) {}

  @Post('/github-info')
  public async getGithubInfo(@Body() githubCodeDto: GithubCodeDto) {
    const user = await this.usersService.getGithubInfo(githubCodeDto);

    return {
      status: 200,
      message: '깃허브 유저 정보를 조회하였습니다.',
      data: {
        user,
      },
    };
  }
}