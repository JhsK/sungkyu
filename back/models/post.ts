import { Association, DataTypes, Model } from 'sequelize';
import { sequelize } from './index';
import { User } from './user';

interface PostAttributes {
  title: string;
  content: string;
  image?: string;
}

export class Post extends Model<PostAttributes> {
  public readonly id!: number;
  public title!: string;
  public content!: string;
  public image?: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public static associations: {
    postBelongUser: Association<Post, User>;
  };
}

Post.init(
  {
    title: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(80),
      allowNull: true,
    },
  },
  {
    modelName: 'Post',
    tableName: 'Post',
    sequelize,
    timestamps: true,
    paranoid: false,
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
  },
);

Post.belongsTo(User, {
  as: 'postBelongUser',
});
