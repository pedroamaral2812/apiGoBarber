import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';
import { async } from '../../../../../../../../AppData/Local/Microsoft/TypeScript/3.5/node_modules/rxjs/internal/scheduler/async';

class User extends Model {
  static init(sequelize){
    super.init({
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      //Campo vitual são campos que nunca existirão de fato na tabela
      password: Sequelize.VIRTUAL,
      password_hash: Sequelize.STRING,
      provider: Sequelize.BOOLEAN,
    },{
      sequelize,
    });

    this.addHook('beforeSave', async user => {
      if(user.password){
        user.password_hash = await bcrypt.hash(user.password,8);
      }
    });

    return this;
  }
}

export default User;
