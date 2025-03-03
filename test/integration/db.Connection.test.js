const mysql = require('mysql2/promise');

const dbConfig = {
  host: '192.168.122.100',
  user: 'root',
  password: 'admin123',
  database: 'deni_app'
};

test('Cek koneksi ke database MySQL', async () => {
    const connection = await mysql.createConnection(dbConfig);
    const [rows] = await connection.execute('SELECT 1 + 1 AS result');
    expect(rows[0].result).toBe(2);
    await connection.end();
  });