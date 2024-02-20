-- DropForeignKey
ALTER TABLE "Article" DROP CONSTRAINT "Article_id_category_fkey";

-- AlterTable
ALTER TABLE "Article" ALTER COLUMN "id_category" DROP NOT NULL,
ALTER COLUMN "author_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Article" ADD CONSTRAINT "Article_id_category_fkey" FOREIGN KEY ("id_category") REFERENCES "Category"("id_category") ON DELETE SET NULL ON UPDATE CASCADE;
