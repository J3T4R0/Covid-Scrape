package com.storefront.utilities;

import com.storefront.model.*;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class SampleData {

    public static List<Customer> createSampleCustomers() {

        List<Customer> customerList = new ArrayList<>();
        newCustomer = new Customer();
        newCustomer.setExpectedCases(expectedCasesList);

        expectedCasesList = new ArrayList<>();


        expectedCases = new Address();
        expectedCases.setExpectedCases(434545);
        expectedCasesList.add(expectedCases);

        expectedCasesList.add(expectedCases);

        expectedCases = new Address();
        expectedCases.setExpectedCases(686868);
        

        expectedCasesList.add(expectedCases);
        customerList.add(newCustomer);
        return customerList;
    }

}
