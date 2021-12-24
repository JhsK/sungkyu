import { Association, DataTypes, Model } from 'sequelize';
import { sequelize } from './index';
import { Post } from './post';

interface UserAttributes {
  email: string;
  password: string;
  username: string;
}

export class User extends Model<UserAttributes> {
  public readonly id!: number;
  public email!: string;
  public username!: string;
  public password!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public static associations: {
    userHasManyPost: Association<User, Post>;
  };
}

User.init(
  {
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
  },
  {
    modelName: 'User',
    tableName: 'User',
    sequelize,
    timestamps: true,
    paranoid: false,
    charset: 'utf8',
    collate: 'utf8_general_ci',
  },
);

User.hasMany(Post, {
  sourceKey: 'id',
  foreignKey: 'user_id',
  as: 'userHasManyPost',
});
