package com.gyex.website.entity;

import com.gyex.website.util.$;
import com.jfa.commons.exception.ServiceException;
import org.h2.mvstore.Page;

import java.util.List;

/**
 * @author Created by Admin on 2016/7/6.
 * @copyright ${copyright}
 */
public class Pager<T extends BaseEntity> extends BaseEntity {

    private int pageSize = 10;

    private int pageIndex = 1;

    private int total;

    private int previous;

    private int next;

    private int first;

    private int last;

    private T condition;

    private List<T> result;

    public int getPageSize() {
        return pageSize;
    }

    public void setPageSize(int pageSize) {
        this.pageSize = pageSize;
    }

    public int getPageIndex() {
        return pageIndex;
    }

    public void setPageIndex(int pageIndex) {
        this.pageIndex = pageIndex;
    }

    public int getTotal() {
        return total;
    }

    public void setTotal(int total) {
        this.total = total;
    }

    public int getPrevious() {
        return previous;
    }

    public void setPrevious(int previous) {
        this.previous = previous;
    }

    public int getNext() {
        return next;
    }

    public void setNext(int next) {
        this.next = next;
    }

    public int getFirst() {
        return first;
    }

    public void setFirst(int first) {
        this.first = first;
    }

    public int getLast() {
        return last;
    }

    public void setLast(int last) {
        this.last = last;
    }

    public List<T> getResult() {
        return result;
    }

    public void setResult(List<T> result) {
        this.result = result;
    }

    public T getCondition() {
        return condition;
    }

    public void setCondition(T condition) {
        this.condition = condition;
    }

    public interface Callback<T> {

        List<T> query(T t) throws ServiceException;
    }

    public Pager<T> pagingQuery(Integer total, Callback callback) throws ServiceException {

        initInfo(total);

        if ($.isNull(total) || $.isEqual(0, total)) {
            // 没有任何数据
            return this;
        }

        int startIndex = pageSize * (pageIndex - 1);

        if ($.isNull(this.getCondition())) {
            // 正在考虑是否是查询所有
            throw new IllegalArgumentException("user.find.illegalArg");
        }

        this.getCondition().setStartIndex(startIndex);

        this.getCondition().setPageSize(pageSize);

        this.setResult(callback.query(this.getCondition()));

        return this;
    }

    private void initInfo(Integer total) {

        this.total = total;

        // 设置页大小
        if ($.isEqual(0, pageSize)) {
            //设置默认
            pageSize = 10;
        }

        // 设置当前页
        if ($.isEqual(0, pageIndex)) {
            pageIndex = 1;
        }

        // 设置上一页信息
        if (pageIndex > 1) {
            previous = pageIndex - 1;
        } else {
            previous = 1;
        }

        // 总页数
        last = total % pageSize == 0 ? total / pageSize : total / pageSize + 1;

        // 设置下一次索引
        next = pageIndex + 1;
        if (next > last) {
            next = last;
        }

        // 设置头页索引
        first = 1;
    }
}