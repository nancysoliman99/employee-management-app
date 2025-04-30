using CRUD_on_Employee.Models;

namespace CRUD_on_Employee.Services
{
    public interface IEmployeeService
    {
        Task<List<Employee>> GetAllAsync();
        Task<Employee?> GetByIdAsync(int id);
        Task<Employee> CreateAsync(Employee employee);
        Task<bool> UpdateAsync(int id, Employee employee);
        Task<bool> DeleteAsync(int id);
    }
}
