import { MigrationInterface, QueryRunner, Table, TableUnique } from "typeorm";

export class Appointments1708978652020 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "appointments",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "appointment_date",
                        type: "date",
                    },
                    {
                        name: "user_id",
                        type: "int",
                    },
                    {
                        name: "service_id",
                        type: "int",
                    },
                ],
                uniques: [
                    new TableUnique({
                       name: "user_service_unique",
                       columnNames: ["user_id", "service_id"],
                    }),
                 ],
                foreignKeys: [
                    {
                        columnNames: ["user_id", ],
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE"
                    },
                    {
                        columnNames: ["service_id", ],
                        referencedTableName: "services",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE"
                    }
                ]
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("appointments");
    }

}